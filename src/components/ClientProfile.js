import React, { useState } from 'react'
import Slider from 'react-input-slider'
export const ClientProfile = () => {
  const [active, setActive] = useState('lump')
  const [state, setState] = useState({ x: 50 })
  const handleClick = (e) => {
    setActive(e.target.id)
  }

  return (
    <div>
      <div className='card'>
        <div className='card-content'>
          <section className='client__profile'>
            <div className='subtitle'>
              <strong className='is-size-6'>CLIENT PROFILE</strong>
            </div>
            <p className='is-size-7 '>
              <strong>
                Couple: Male, Age | Female, Age 45
                <a className='has-text-primary pl-2'> Edit</a>
              </strong>
            </p>
          </section>

          <section className='investment__details'>
            <div className='subtitle pt-5'>
              <p>
                <strong className='is-size-6'>INVESTMENT DETAILS</strong>
              </p>
            </div>
            <div>
              <div className='tabs is-toggle'>
                <ul>
                  <li
                    className={active === 'lump' ? 'is-active' : null}
                    id='lump'
                  >
                    <a onClick={(e) => handleClick(e)} id='lump'>
                      <span id='lump'>Lump Sum</span>
                    </a>
                  </li>
                  <li className={active === 'multiple' ? 'is-active' : null}>
                    <a onClick={(e) => handleClick(e)} id='multiple'>
                      <span id='multiple'>Multiple Payouts</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='is-size-7 py-3 has-text-grey'>
              <p>
                Client will be paid and allocated payout when they reach each
                payout age.
              </p>
            </div>
          </section>

          <section className='investment__amount'>
            <div className='subtitle pt-5'>
              <p>
                <strong className='is-size-6'>INVESTMENT AMOUNT</strong>
              </p>
              <div className='slidecontainer pt-4'>
                <Slider
                  styles={{
                    track: {
                      // backgroundColor: '#dedede'
                      backgroundColor: '#dedede',
                      height: '10px',
                      width: '100%'
                    },
                    active: {
                      backgroundColor: '#00d1b2'
                    },
                    thumb: {
                      width: 30,
                      height: 30,
                      border: '2px solid #00d1b2'
                    },
                    disabled: {
                      opacity: 0.5
                    }
                  }}
                  xmin={50}
                  xmax={500}
                  axis='x'
                  xstep={10}
                  x={state.x}
                  onChange={({ x }) => setState((state) => ({ ...state, x }))}
                />
              </div>
            </div>
            <div className='is-flex is-flex-direction-row is-justify-content-space-between '>
              <div className='is-size-7'>
                <p>
                  <strong className='has-text-grey'>$50K</strong>
                </p>
              </div>
              <div className='is-size-7 '>
                <p>
                  <strong className='has-text-grey'>$500K</strong>
                </p>
              </div>
            </div>
            <div className='subtitle is-flex is-justify-content-center'>
              <p>
                <strong className='is-size-3 has-text-primary'>
                  ${state.x}K
                </strong>
              </p>
            </div>
          </section>

          <section className='investment__return pt-6 pb-3 is-flex is-justify-content-center'>
            <p className='is-size-7'>
              <strong>
                Est. 6% Return on Investment
                <a className='has-text-primary pl-2'> Edit</a>
              </strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
