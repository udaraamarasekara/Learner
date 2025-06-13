<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestController extends Controller
{
  public function categories()
  {
    return Inertia::render('Categories');
  }

   public function courses()
  {
    return Inertia::render('Courses');
  }
     public function instructors()
  {
    return Inertia::render('Instructors');
  }
}
