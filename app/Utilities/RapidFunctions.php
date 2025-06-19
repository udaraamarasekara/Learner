<?php
namespace App\Utilities;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


use Illuminate\Support\Facades\Validator;
use Illuminate\Http\UploadedFile;
class RapidFunctions
{
    /**
     * Upload an image file to a specified folder.
     *
     * @param \Illuminate\Http\UploadedFile $image
     * @param string $folder
     * @return string The path of the uploaded image.
     */


public static function uploadImageFile(UploadedFile $image,string $folder): string
{
    // Manually validate the UploadedFile
    $validator = Validator::make(
        ['image' => $image],
        ['image' => 'required|image|max:2048']
    );

    if ($validator->fails()) {
        // You can throw a validation exception or handle it as needed
        abort(422, $validator->errors()->first('image'));
    }
    // Proceed to store the image
    $filename = \Illuminate\Support\Str::uuid() . '.' . $image->getClientOriginalExtension();

    $path = $image->storeAs($folder, $filename, 'private');

    return $path;
}
}