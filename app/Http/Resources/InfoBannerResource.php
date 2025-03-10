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

        $callToAction = CallToAction::where('location', $this->location)->first();
        if (is_null($callToAction)) {
            $callToAction = new CallToAction([
                'cta_url' => '/',
                'cta_text' => 'Go back home',
                'location' => 'any'
            ]);
        }
        // dd($callToAction);
        return [
            'id' => $this->id,
            'imageUrl' => $this->image_url,
            'altText' => $this->alt_text,
            'backgroundColor' => $this->background_color,
            'textWhite' => $this->text_white,
            'header' => $this->header,
            'text' => $this->text,
            'page' => $this->page,
            'location' => $this->location,
            'cta' => new CallToActionResource($callToAction)
        ];
    }
}
