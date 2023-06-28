import Layout from '@/Components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '@/Components/AnimatedText'
import profilePic from '../../public/image/profile/IMG002.jpeg'
import { LinkArrow } from '@/Components/icon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hank的前端冒險旅程</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:p-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 px-0 py-1 md:w-full'>
              <Image src={profilePic} alt="Hank's Picture" className='w-full h-auto lg:hidden md:inline-block md:w-full py-16 px-32 md:px-8'
                priority
                size='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='將想像幻化為真實，視覺和Coding的融合.' className='!text-2xl !text-left mt-6 xl:text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='mt-2 text-xs font-medium md:text-sm sm:text-xs'>透過網頁前端技術，完成能幫忙人類進步的網站，專精Vue.js和JavaScript，目前進修React.js和Next.js，完成相關技術網頁作品以及後端Node.js等前端工程師領域所需知識。目標成為一位全端工程師
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/dummy.pdf' target={'_black'}
                  className='flex
                items-center
                bg-light
                text-main
                font-semibold
                rounded-lg
                px-2
                mx-2
                hover:bg-light
                hover:text-dark
                border-2
                border-solid
                border-main
                hover:border-dark
                dark:bg-dark
                dark:text-main
                dark:border-main
                hover:dark:bg-dark
                hover:dark:text-light
                hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                '
                  download={true}>下載我的履歷
                  <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link href='mailto:hank2929@hotmail.com' target={'_black'}
                  className='ml-2 text-lg font-medium capitalize underline text-dark dark:text-light md:text-base'>聯絡我</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
