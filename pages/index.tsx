import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetaData from '@/data/siteMetaData'
import { client } from '@/libs/client'
import formatDate from '@/utils/fotmatDate'

export default function Home({ blog }: { blog: any }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetaData.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {blog.map((blog: any) => {
            const { id, title, content, eyecatch, category, publishedAt } = blog
            return (
              <li key={id} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blogs/${id}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          {/* <div className="flex flex-wrap">
                          {category.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div> */}
                        </div>
                        {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div> */}
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blogs/${id}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
