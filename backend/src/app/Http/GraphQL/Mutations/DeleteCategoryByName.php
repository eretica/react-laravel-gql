<?php


namespace App\Http\GraphQL\Mutations;

use App\Models\Category;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class DeleteCategoryByName
{
    // resolver
    public function resolve(
        $rootValue,
        array $args,
        GraphQLContext $context = null,
        ResolveInfo $resolveInfo
    ) {
        $name = $args['name'];
            Category::where('name', 'like', $name)
            ->delete();

        $res = 'ok';

        return compact('res');
    }
}
