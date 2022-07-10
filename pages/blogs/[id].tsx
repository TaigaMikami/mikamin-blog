// pages/blog/[id].js
import PageTitle from '@/components/PageTitle'
import formatDate from '@/utils/fotmatDate'
import { client } from '../../libs/client'
import styles from '../../styles/Home.module.scss'

export default function BlogId({ blog }: { blog: any }) {
  return (
    <main className={styles.main}>
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{blog.title}</PageTitle>
          </div>
        </div>
      </header>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className={styles.post}
      />
    </main>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: any) => `/blogs/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
