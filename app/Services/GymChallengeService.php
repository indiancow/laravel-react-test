<?php
namespace App\Services;

use App\Models\User;
use App\Models\GymLeader;

class GymChallengeService
{
    public function canChallenge(User $user, GymLeader $gymLeader)
    {
        // dd($gymLeader);
        $requiredSkillId = $gymLeader->skill_id;
        // dd($requiredSkillId);
        $requiredLevel = $gymLeader->required_level;
        // dd($requiredLevel);
        $userSkillLevel = $user->userSkills()
        // dd($userSkillLevel);
            ->where('skill_id', $requiredSkillId)
            ->value('level') ?? 0;  // null coalescing operator to handle nulls

        return $userSkillLevel >= $requiredLevel;
    }
}

?>