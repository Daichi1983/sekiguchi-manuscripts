import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="関口存男文例集電子版" />
    <div className="container  my-5">

      <div className="container">
        <h1>お問い合わせ</h1>
        <dl>
	 <dt>E-mail</dt>
	 <dd>der.artikel※gmail.com （※を@に変えてください）</dd>
	 <dt>Twitter</dt>
	 <dd><Link to="https://twitter.com/kanshikenkyukai">@kanshikenkyukai</Link></dd>
	</dl>
    </div>
   </div>
  </Layout>
)

export default AboutPage
