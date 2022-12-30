import TopCompanyCard from '@component/Cards/TopCompanyCard'
import Title from '@component/Title'
import TopCompaniesData from '@utils/TopCompaniesData'

const TopCompanies = (): React.ReactElement => {
  return (
    <div className='mt-24'>
      <Title
        heading='Top Company Registered'
        desc='Some of the companies we have helped recruit excellent applicants over the years.'
        align='start'
      />
      <section className='section mt-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {TopCompaniesData.map((company) => {
              return (
                <TopCompanyCard
                  key={company.name}
                  imgSrc={company.imgSrc}
                  jobsOpen={company.jobsOpen}
                  location={company.location}
                  name={company.name}
                />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopCompanies
