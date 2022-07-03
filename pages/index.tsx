import Link from 'next/link'
import Tag from '@/components/Tag'
import { client } from '../libs/client'

export default function Home({ blog }: { blog: any }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        {blog.map((blog: any) => {
          const { id, title, content, eyecatch, category, date } = blog
          return (
            <li key={id} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blogs/${id}`} className="text-gray-900 dark:text-gray-100">
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
