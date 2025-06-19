<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Utilities\RapidFunctions;
class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        if ($request->hasFile('photo')) {
            $imageUrl = RapidFunctions::uploadImageFile($request->file('photo'),'profile_photos');
            $request->user()->photo = $imageUrl;
        }
        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function showProfilePhoto($filename)
{
    $user = auth()->user();

    // Example: Only allow access to their own photo or if they're admin
    if ($user->role !== 'admin' && !$user->photo || $user->photo !== "profile_photos/{$filename}") {
        abort(403, 'Unauthorized access to file.');
    }

    $path = "profile_photos/{$filename}";

    if (!Storage::disk('private')->exists($path)) {
        abort(404, 'File not found.');
    }

    return response()->file(Storage::disk('private')->path($path));
}


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
