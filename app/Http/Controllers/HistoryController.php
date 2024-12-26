<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookedSessionResource;
use App\Models\BookedSession;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index() {
        $bookedSessions = BookedSession::query()
            ->with(['tutor'])
            ->where('user_id', auth()->user()->id)
            ->latest()
            ->paginate();

        // $bookedSessions = BookedSession::all();
        // dd($bookedSessions);

        $userId = auth()->user()->id;
        // dd($userId);

        return Inertia::render('History', [
        'bookedSessions' => BookedSessionResource::collection($bookedSessions),
        ]);
    }
}
