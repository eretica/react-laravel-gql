<?php


namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Routing\Controller;

class CategoryController extends Controller
{
    public function index() {
        return ['categories' => Category::all()];
    }

}
