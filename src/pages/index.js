import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 container">

<div class="container">
<h2 class="pink">更新履歴</h2>
<dl>
<dt>2021年8月1日</dt>
<dd>全文例集を公開しました。</dd>
<dt>2019年3月22日</dt>
<dd>ページを暫定公開しました。</dd>
</dl>
<h2>コンテンツ</h2>
<dl>
<dt><Link to="all">関口存男文例集コピー総目次</Link></dt>
<dd>関口存男が生涯をかけて集めた文例集の目次です。文例集はここからごらんください。</dd>
<dt><Link to="sekiguchi">関口存男とは</Link></dt>
<dd>ドイツ語学者、関口存男の説明です。</dd>
<dt><Link to="about">このサイトについて</Link></dt>
<dd>このサイトについての説明です。</dd>
<dt><Link to="toiawase">お問い合わせ</Link></dt>
<dd>問い合わせ窓口</dd>
<dt>リンク</dt>
<dd>リンク集</dd>
</dl>
</div>


    </section>
  </Layout>
)

export default IndexPage
