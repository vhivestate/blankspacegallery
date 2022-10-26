import React from 'react'

function Events() {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mMfqqF5zhm5dqJzpy7rjaUbJRWeLOfodUE3ZwfhfobySlWI_db7DRzWKVdc2j8Smh3bR9Mof7uFN2XntNNLO2X6g0HdcUHycfUdr9e1b09ooGuc6ohk52gTaiF2GxPUac0yYBWLQc9ehPPhAfTCUFsu3O5w2p78aApHNauudRWbDm5O7AHZe2z1XWUxmqTktQ?width=1124&height=752&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">EVENTS</h1>
            {/* <p>Community-driven tattoo studio & fine art gallery</p> */}
        </div>
      </div>
    </div>

    <div className='bg-white p-14'>
    <h1 className='text-center'> NO UPCOMING EVENTS</h1>
    </div>
    </div>
  )
}

export default Events