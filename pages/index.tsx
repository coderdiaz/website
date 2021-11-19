import BaseLayout from '@layouts/BaseLayout'
import HomePageLayout from '@layouts/HomePage'

export default function IndexPage() {
  return (
    <HomePageLayout />
  )
}

IndexPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}
