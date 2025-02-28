<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookedSessionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'credits' => $this->credits,
            'tutor' => new TutorResource($this->tutor),
            'created_at' => $this->created_at->format('F dS, Y'),
        ];
    }
}
