<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TutorResource extends JsonResource
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
            'name' => $this->name,
            'image' => $this->image,
            'credits_required' => $this->credits_required,
            'description' => $this->description,
            'english' => $this->english,
            'spanish' => $this->spanish,
            'portuguese' => $this->portuguese,
            'french' => $this->french,
            'german' => $this->german,
            'japanese' => $this->japanese,
            'mandarine' => $this->mandarine,
        ];
    }
}
