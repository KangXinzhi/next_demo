import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Navbar}>
        <div className={styles.headerLeft}>
          <Image src='/logo.png' className={styles.logo} width={240} height={400} alt='托福写作测评'/>
          <span>托福写作测评</span>
        </div>
        <nav>
          <ul>
          <ul>
            <li>
            <div id="banner">
                首页
              </div>
            </li>
            <li>
              <div id="product" >
                产品介绍
              </div>
            </li>
            <li>
              <div id="feedback" >
                用户评价
              </div>
            </li>
            <li>
              <div id="about" >
                关于我们
              </div>
            </li>
            <li>
              <Link href='/ai'>
                开始评测
              </Link>
            </li>
          </ul>
          </ul>
        </nav>
      </header>

      <div className={styles.Content}>
        <div className={styles.banner} id="banner">
          <h1>欢迎来到智课托福写作测评网站</h1>
          <p>在这里，您可以提交您的托福写作作文并获得自动评分和反馈。</p>
          <p>我们的AI系统将分析您的作文并根据语法、逻辑、组织结构等方面进行评估。</p>
          <p>通过我们的评估报告，您可以了解您的写作强项和弱点，并获得改进建议。</p>
        </div>

        <div className={styles.Product} id="product">
          <h2>产品介绍</h2>
          <div className={styles.Features}>
            <div className={styles.Feature}>
              <Image src='/feature1.png' alt="Product 1" width={300} height={240} className={styles.productImage} />
              <h3>准确评分</h3>
              <p>我们的AI模型会根据托福写作评分标准进行准确打分，帮助您了解您的写作水平。</p>
            </div>
            <div className={styles.Feature}>
              <Image src='/feature2.png' alt="Product 2" width={300} height={240} className={styles.productImage} />
              <h3>丰富题库</h3>
              <p>我们都为您提供了多样化的题目选择。这样您可以针对不同题型和话题进行练习，提高您的写作技巧和应试能力。</p>
            </div>
            <div className={styles.Feature}>
              <Image src='/feature3.png' alt="Product 3" width={300} height={240} className={styles.productImage} />
              <h3>详细报告</h3>
              <p>我们将为您生成详细的评估报告，包括分数、错误指导和个性化的写作建议。</p>
            </div>
          </div>
        </div>

        <div className={styles.Feedback} id="feedback">
          <h2>用户评价和反馈</h2>
          <div className={styles.Review}>
            <Image src='/user1.jpg' className={styles.avatar} width={80} height={80} alt="User 1" />
            <div className={styles.reviewContent}>
              <h3>江江姜</h3>
              <p>使用智课托福写作测评网站后，我对我的写作水平有了更清晰的认识。评估报告非常详细，给出了我的得分、错误指导和个性化的写作建议。这对我来说非常有帮助。</p>
            </div>
          </div>
          <div className={styles.Review}>
            <Image src='/user2.jpg' className={styles.avatar} width={80} height={80} alt="User 2" />
            <div className={styles.reviewContent}>
              <h3>张开心</h3>
              <p>智课托福写作测评网站是我在准备托福考试期间的得力助手。它的评估报告非常全面，能够帮助我发现自己的弱点并提供针对性的建议。感谢这个网站，我在写作方面取得了显著的进步。</p>
            </div>
          </div>

          <div className={styles.Review}>
            <Image src='/user3.jpg' className={styles.avatar} width={80} height={80} alt="User 3" />
            <div className={styles.reviewContent}>
              <h3>王同学</h3>
              <p>我非常喜欢智课托福写作测评网站，它对我的写作提升起到了关键作用。评分结果准确且详细，而且给出的写作建议非常实用。我经常使用它来练习和改进我的写作技巧。</p>
            </div>
          </div>
        </div>

        <div className={styles.AboutUs} id="about">
          <h2>关于我们</h2>
          <p>创新伙伴（智课科技）是由中科院国科嘉和、百度、许国璋家族基金、华永集团、金砖资本等联合战略投资的人工智能+素质教育的领军企业，累计融资6亿元人民币。</p>
          <p>公司于2014年入选科技部国家火炬计划，2015年获得国家高新技术企业证书，2021年被评为北京市“专精特新”企业，是国家重点支持的科技企业。</p>
          <p>企业的使命是通过科技促进优质教育资源普惠，让每一个学生和学校都享受到优质的教育资源。</p>
        </div>
      </div>
    </div>
  )
}

export default App
