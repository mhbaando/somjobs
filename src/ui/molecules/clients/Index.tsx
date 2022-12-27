import ClientLists from '@/utils/ClientList'
import React from 'react'

const Clients = (): React.ReactElement => {
  return (
    <section className='section mt-12'>
      <div className='max-w-6xl mx-auto grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5  justify-end items-center'>
        {ClientLists.map((clnt) => {
          return (
            <div key={clnt.name}>
              <img src={clnt.imgSrc} alt={clnt.name} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients
