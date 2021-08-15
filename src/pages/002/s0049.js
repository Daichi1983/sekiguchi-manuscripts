import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="関口存男文例集総目次" />
     <div class="container">

<div class="row text-center">
<div class="col-4">
      <Link to="../s0048">←前ページ</Link>
</div>
<div class="col-4">
      <Link to="/000/s0003">↑</Link>
</div>
<div class="col-4">
      <Link to="../s0050">後ページ→</Link>
</div>
</div><nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">原本</a>
    <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-honkoku" role="tab" aria-controls="nav-profile" aria-selected="false">翻刻</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

      <StaticImage
        src="../../images/002/s0049.png"
      />
</div>
  <div class="tab-pane fade" id="nav-honkoku" role="tabpanel" aria-labelledby="nav-profile-tab">
<p>
鋭意製作中
</p>
</div>
</div><div class="row text-center">
<div class="col-4">
      <Link to="../s0048">←前ページ</Link>
</div>
<div class="col-4">
      <Link to="/000/s0003">↑</Link>
</div>
<div class="col-4">
      <Link to="../s0050">後ページ→</Link>
</div>
</div>

</div>
  </Layout>
)

export default SecondPage