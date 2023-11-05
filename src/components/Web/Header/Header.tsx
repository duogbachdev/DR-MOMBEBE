import React from 'react'
import logoDrMombobo from '~/assets/img/Header/logo.png'
import logoPhone from '~/assets/img/Header/phone.png'
import logoCart from '~/assets/img/Header/cart.png'
import logoEllipse from '~/assets/img/Header/Ellipse.png'
import logoHamburger from '~/assets/img/Header/Hamburger.png'

const Header = () => {
  return (
    <div className='font-Inter xl:bg-[#40652F] py-4 px-4 xl:px-0 flex items-center justify-between xl:justify-around'>
      <div className='block xl:hidden'>
        <img className='w-6' src={logoHamburger} alt='logo-drmombobo' />
      </div>

      <div>
        <img className='h-9 w-20' src={logoDrMombobo} alt='logo-drmombobo' />
      </div>

      <div className='hidden xl:block text-[#FFFEF9] text-base not-italic font-normal leading-6'>
        <ul className='flex items-center gap-8'>
          <li className='font-bold'>Trang chủ</li>
          <li>Chăm sóc sức khỏe</li>
          <li>Tin tức</li>
          <li>Sản phẩm</li>
          <li>Chuyên gia tư vấn</li>
          <li>Dược liệu đạt chuẩn</li>
        </ul>
      </div>

      <div className='flex items-center gap-5'>
        <div className='hidden xl:flex items-center gap-2 w-36 bg-white rounded-full py-2 justify-center'>
          <img src={logoPhone} alt='logo-phone' />
          <p className='text-base not-italic font-semibold text-[#537B32] leading-6'>0196 8888</p>
        </div>

        <div className='relative'>
          <img src={logoCart} alt='logo-phone' />
          <img className='absolute -bottom-1 -right-1' src={logoEllipse} alt='logo-ellipse' />
          <div className='absolute -bottom-[10px] -right-[1.5px] text-[#FFFEFB] not-italic font-semibold leading-6 text-[9px]'>
            5
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
