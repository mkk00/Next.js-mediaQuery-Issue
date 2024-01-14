import Head from "next/head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>미디어쿼리 이슈</title>
        <meta name="description" content="미디어쿼리 이슈 해결방안" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>{children}</>
    </>
  )
}
