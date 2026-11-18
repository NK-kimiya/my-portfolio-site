import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="">
      <header className="md:flex md:justify-between">
        <h1 className="text-2xl py-2 px-4">kimiyasu</h1>
        <nav className="">
          <ul className="flex">
            <li className="p-2">
              <a href="#work">WORKS</a>
            </li>
            <li className="p-2">
              <a href="#learn">LEARNING</a>
            </li>
            <li className="p-2">
              <a href="#SKILLS">SKILLS</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="main-visual" className="p-4 w-5/6 mx-auto">
        <small className="p-4">STUDENT PORTFOLIO / 2026</small>
        <h2 className="text-4xl p-4">
          I want to use IT to alleviate the loneliness<br></br> of people with
          disabilities or illnesses
        </h2>
        <button className="bg-green-800 py-2 px-2 rounded-2xl m-4 text-2xl w-4/6 md:w-80 text-center">
          <a href="https://github.com/NK-kimiya?tab=repositories" className="block  flex w-full text-center justify-center">
            <FontAwesomeIcon icon={faGithub} className="w-[30px] text-white" />
            <p className="text-white pl-1">GitHub</p>
          </a>
        </button>
      </div>
      <main className="">
        <div id="work" className="w-5/6 mx-auto font-bold">
          <small className="p-4">PRODUCT</small>
          <h3 className="text-2xl font-bold">制作物・活動</h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="shadow-lg p-6 m-2">
              <Image
                className="w-80"
                src="/2024-web-contest.png"
                alt="第24回webコンテスト"
                width={800}
                height={600}
                priority
              />
              <small>WEB CONTEST</small>
              <h3>
                第24回全国中学高校Webコンテスト(高校生の部（Web教材・社会科学）)
                Webコンテスト
              </h3>
              <p className="text-gray-500">銀賞</p>
              <p>
                <a
                  href="https://webcon.japias.jp/page-library_24.html"
                  className="inline-flex font-medium items-center text-fg-brand hover:underline text-blue-500"
                >
                  全国中学高校Webコンテスト第24回受賞作品
                </a>
              </p>
              <p>
                <a
                  href="https://contest.japias.jp/tqj24/240313G/"
                  className="inline-flex font-medium items-center text-fg-brand hover:underline text-blue-500"
                >
                  作品名「汚染防止プロセス～現状から今できることへ～」
                </a>
              </p>
            </div>

            <div className="shadow-lg p-6 m-3">
              <Image
                className="w-80"
                src="/hack-u.png"
                alt="ハッカソンイメージ"
                width={800}
                height={600}
                priority
              />
              <small className="text-green-800">HACK</small>
              <h3>Open Hack U 2023 ONLINEOpen Hack U 2023 ONLINE</h3>
              <p className="text-gray-500 text-yellow-500">
                最優秀賞・Happy Hacking賞
              </p>
              <p>
                <a
                  href="https://hacku.yahoo.co.jp/hacku2023_online/"
                  className="inline-flex font-medium items-center text-fg-brand hover:underline text-blue-500"
                >
                  Open Hack U 2023 ONLINE
                </a>
              </p>

              <p>作品名「ポチナビ」・チーム名「雛たち」</p>

              <button className="bg-green-800 py-2 px-2 rounded-2xl m-2 text-2sm w-40 md:w-50">
                <a
                  href="https://github.com/Naoya-Yasuda/HackU2023_project.git"
                  className="block  flex w-full text-center justify-center"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 text-white" />
                  <p className="text-white pl-1">GitHub</p>
                </a>
              </button>
            </div>

            <div className="shadow-lg p-6 m-3">
              <Image
                className="w-80"
                src="/academy-thesis.png"
                alt="ハッカソンイメージ"
                width={800}
                height={600}
                priority
              />
              <small className="text-green-800">HACK</small>
              <h3　className="text-lg>卒業研究：精神的苦痛の関連要因の探索</h3>
              <p className="text-sm">
                統計解析と機械学習を用いた深刻な精神的苦痛の関連要因の探索
              </p>

              <button className="bg-green-800 py-2 px-2 rounded-2xl m-4 text-2sm w-4/5 text-center w-40 md:w-50">
                <a
                  href="https://portfolio-site-thesis-project.vercel.app/"
                  className="block  flex w-full text-center justify-center"
                >
                  <p className="text-white pl-1">詳細</p>
                </a>
              </button>
            </div>

            <div className="shadow-lg p-6 m-3">
              <Image
                className="w-80"
                src="/lifenect.png"
                alt="lifenectイメージ"
                width={800}
                height={600}
                priority
              />
              <h3 className="text-lg>個人開発：「LifeNect」</h3>
              <p className="text-sm">
                障がいや病気のある方が、孤独や孤立を感じたときに、安心して人とつながれる場所をつくりたいという思いから開発したプロダクトです。
              </p>

              <button className="bg-green-800 py-2 px-2 rounded-2xl m-4 text-2sm w-4/5 text-center w-40 md:w-50">
                <a
                  href="https://portfolio-site-lifenect.vercel.app/"
                  className="block  flex w-full text-center justify-center"
                >
                  <p className="text-white pl-1">詳細</p>
                </a>
              </button>
            </div>
          </div>
        </div>

        <div id="learn" className="w-5/6 mx-auto">
          <small className="p-4 font-bold">LEARNING</small>
          <h3 className="text-2xl font-bold">大学で学んでいること</h3>
          <p>コンピューターサイエンス</p>
          <ul>
            <li>・AI開発</li>
            <li>・データサイエンス</li>
            <li>・プログラミング（Python、Rなど、C言語など）</li>
            <li>・アルゴリズムとデータ構造</li>
            <li>・インターネット、ネットワーク技術</li>
            <li>・情報セキュリティ</li>
            <li>・UNIX</li>
            <li>・生成AI概論</li>
          </ul>
          <div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 mx-auto">
              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge01.png"
                  alt="AI卒業研究のオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badge-qr01.png"
                  alt="AI卒業研究のオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div>
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge-02.png"
                  alt="AI応用基礎レベルのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-02.png"
                  alt="AI応用基礎レベルのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div>
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge-03.png"
                  alt="AI/Artificial Intelligenceのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-03.png"
                  alt="AI/Artificial IntelligenceのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge-04.png"
                  alt="ソフトウェア/Software Engineeringのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-04.png"
                  alt="ソフトウェア/Software EngineeringのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge05.png"
                  alt="テクノロジー基礎Ⅰのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-05.png"
                  alt="テクノロジー基礎ⅠのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge07.png"
                  alt="テクノロジー基礎IIのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-07.png"
                  alt="テクノロジー基礎IIのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge06.png"
                  alt="数学基礎/のオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-06.png"
                  alt="テクノロジー基礎ⅠのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>

              <div className="">
                <Image
                  className="w-50 block mx-auto"
                  src="/openbadge08.png"
                  alt="AIリテラシーレベルのオープンバッジ"
                  width={800}
                  height={600}
                  priority
                />
                <Image
                  className="w-50 block mx-auto"
                  src="/badgeqr-08.png"
                  alt="AIリテラシーレベルのオープンバッジQRコード"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div id="learn" className="w-5/6 mx-auto">
          <small className="p-4 font-bold">SKILL</small>
          <h3 className="text-2xl font-bold">スキル・使用ツール</h3>
          <div>
            <p className="px-3 py-1 w-30 text-center m-2">
              HTML/CSS
            </p>
            <p className="px-3 py-1 w-50 text-center m-2">
              JavaScript/TypeScript
            </p>
            <p className="px-3 py-1 w-40 text-center m-2">
              Next.js/React.js
            </p>
            <p className="px-3 py-1 w-40 text-center m-2">
              Python/R
            </p>
            <p className="px-3 py-1 w-60 text-center m-2">
              Django/Tensorflow/PyTorch
            </p>
            <p className="px-3 py-1 w-50 text-center m-2">
              GitHub/Vscode/Codex
            </p>
            <p className="px-3 py-1 w-50 text-center m-2">
              Render.com/vercel/
            </p>
            <p className="px-3 py-1 w-50 text-center m-2">
              Resend/Namecheape/
            </p>
            <p className="px-3 py-1 w-50 text-center m-2">
              Pinecone/supabase
            </p>
            <p className="px-3 py-1 w-30 text-center m-2">
              CloudFlare
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
