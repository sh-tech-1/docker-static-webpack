//import 文を使ってstyle.cssファイルを読み込む。
import "./style.scss";

//foundation:セレクタはidやclassを使わずに、プロパティを上書きしやすくする
import "./foundations/reset.scss";

//Layout:サイト全体のブロックを定義する。
import "./layouts/_header.scss";
import "./layouts/_main.scss";
import "./layouts/_footer.scss";
import "./layouts/_side.scss";


//Object:サイト内で使用されるオブジェクト(モジュール)で汎用性が高いもの
import "./objects/_input.scss";

//Project:ページ単体でのみ使用されるオブジェクト(モジュール)で汎用性が低いもの
import "./projects/toppage/index.scss";

//Utility:一時的な対処のために利用する
import "./utilities/_utility.scss";

