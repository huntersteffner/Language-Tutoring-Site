<?php

namespace App\Http\Controllers;

class AboutController {
    public function index() {
        $paragraphs = array(
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto suscipit iure asperiores nobis quas repudiandae. Unde, obcaecati itaque. Alias doloremque sunt magnam, optio repellendus autem delectus molestiae quos omnis, minima pariatur modi sequi accusamus? Soluta veritatis dignissimos cum reiciendis minus! Blanditiis nostrum natus ipsum iste voluptatem, voluptates nulla molestiae quasi.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed amet similique. Amet deleniti, blanditiis assumenda aspernatur excepturi ipsa fugit, eum perspiciatis laboriosam laudantium alias reprehenderit atque quasi. Deserunt, optio error! Pariatur aliquam accusamus ex, eligendi quo veritatis beatae in mollitia natus? Animi cupiditate incidunt qui repellat fugit aliquam, veritatis doloremque. Mollitia veritatis magnam expedita illo beatae pariatur repellendus exercitationem odit aspernatur fugiat iste quod asperiores vel voluptates ullam rerum aut facilis, debitis amet similique quidem optio? Quod adipisci quam expedita cupiditate sunt dolorem reiciendis sapiente, culpa labore est aliquid!',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et aperiam consequuntur necessitatibus aliquam dolor laboriosam perferendis exercitationem dicta delectus a! Laboriosam sit cum culpa tenetur?'
        );
        return Inertia('About', [
            'paragraphs' => $paragraphs
        ]);
    }
}