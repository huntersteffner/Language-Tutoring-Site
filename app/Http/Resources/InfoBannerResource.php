<?php

namespace App\Http\Resources;

use App\Models\CallToAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InfoBannerResource extends JsonResource
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
            'imageUrl' => $this->image_url,
            'altText' => $this->alt_text,
            'backgroundColor' => $this->background_color,
            'header' => $this->header,
            'text' => $this->text,
            'page' => $this->page,
            'location' => $this->location,
            'cta' => new CallToActionResource(CallToAction::where('location', $this->location)->firstOrFail())
        ];
    }
}
