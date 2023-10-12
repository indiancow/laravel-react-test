<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Badge;

class BadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $badges = [
            // 説明スキルのバッジ
            ['name' => '説明の火花', 'description' => '初めてのステップを踏み出した証', 'image_path' => 'path/to/explanation1.png'],
            ['name' => '説明の炎', 'description' => '次のステップへの熱い思いを感じる', 'image_path' => 'path/to/explanation2.png'],
            ['name' => '説明の業火', 'description' => '真実の火が燃え盛る', 'image_path' => 'path/to/explanation3.png'],
        
            // 提案スキルのバッジ
            ['name' => '提案の種', 'description' => '新しいアイデアの種を蒔いた証', 'image_path' => 'path/to/proposal1.png'],
            ['name' => '提案の花', 'description' => 'アイデアが花開く瞬間を感じることができる', 'image_path' => 'path/to/proposal2.png'],
            ['name' => '提案の実', 'description' => 'アイデアが実を結んだ証', 'image_path' => 'path/to/proposal3.png'],
        
            // 期待値調整スキルのバッジ
            ['name' => '期待値の砂時計', 'description' => '期待値を適切にコントロールする始まり', 'image_path' => 'path/to/expectation1.png'],
            ['name' => '期待値の時計', 'description' => '期待値調整でタイミングを合わせる技術が身につきました', 'image_path' => 'path/to/expectation2.png'],
            ['name' => '期待値のコンパス', 'description' => '期待値を的確に見抜き、答えにたどり着く力を持っています', 'image_path' => 'path/to/expectation3.png'],

            // 関係構築スキルのバッジ
            ['name' => '関係の糸', 'description' => '人との結びつきが生まれました', 'image_path' => 'path/to/relationship1.png'],
            ['name' => '関係の網', 'description' => '広く浅くのネットワークを構築しました', 'image_path' => 'path/to/relationship2.png'],
            ['name' => '関係の橋', 'description' => '深く強い関係構築のスキルを持っています', 'image_path' => 'path/to/relationship3.png'],
        
            // ヒアリングスキルの
            ['name' => 'ヒアリングの耳', 'description' => '聞く力の始まり', 'image_path' => 'path/to/hearing1.png'],
            ['name' => 'ヒアリングの共感', 'description' => '深い共感を育む耳を持つ', 'image_path' => 'path/to/hearing2.png'],
            ['name' => 'ヒアリングの理解', 'description' => '全てを理解する聴力', 'image_path' => 'path/to/hearing3.png'],
        
            // クロージングスキルの
            ['name' => 'クロージングの鍵', 'description' => '初めての成功への鍵', 'image_path' => 'path/to/closing1.png'],
            ['name' => 'クロージングの錠前', 'description' => '固く守り抜くクロージング力', 'image_path' => 'path/to/closing2.png'],
            ['name' => 'クロージングの金庫', 'description' => '安定したクロージングで宝を守る', 'image_path' => 'path/to/closing3.png']
        ];
        
        foreach($badges as $badge) {
            Badge::create($badge);
        }
    }
}
