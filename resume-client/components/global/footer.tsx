'use client';

const Footer = () => {
  return (
    <footer className='bg-primary' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='xl:grid xl:grid-cols-3'>
          <div className='space-y-8 xl:col-span-2'>
            <div className='-mb-1.5 min-w-[133px] max-w-[133px] text-white text-2xl font-bold'>
              EarnBetter
            </div>
            <div className='inline-flex grow flex-row lg:flex'>
              <a
                target='_blank'
                rel='noopener'
                aria-label='Instagram'
                className='py-0 pr-2'
                href='https://www.instagram.com/earnbetterhq/'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z'
                    fill='white'
                  />
                  <path
                    d='M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z'
                    fill='white'
                  />
                  <path
                    d='M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                target='_blank'
                rel='noopener'
                aria-label='TikTok'
                className='px-2 py-0'
                href='https://www.tiktok.com/@earnbetterhq'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.059 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                target='_blank'
                rel='noopener'
                aria-label='LinkedIn'
                className='px-2 py-0'
                href='https://www.linkedin.com/company/earnbetter/'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                target='_blank'
                rel='noopener'
                aria-label='Youtube'
                className='px-2 py-0'
                href='https://www.youtube.com/channel/UCYPGp1-iYvk_EutJdjfmqfw'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                target='_blank'
                rel='noopener'
                aria-label='Facebook'
                className='px-2 py-0'
                href='https://www.facebook.com/earnbetterHQ'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z'
                    fill='white'
                  />
                </svg>
              </a>
              <a
                target='_blank'
                rel='noopener'
                aria-label='Twitter / X'
                className='px-2 py-0'
                href='https://x.com/EarnBetterHQ'
              >
                <svg
                  width={18}
                  height={18}
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  role='img'
                  focusable='false'
                >
                  <path
                    d='M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z'
                    fill='white'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 xl:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-8'>
              <div>
                <h3 className='text-sm font-medium uppercase tracking-wider text-white'>
                  Products
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/ai-resume/'
                    >
                      AI Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className='whitespace-nowrap text-base text-white opacity-75 hover:text-opacity-60'
                      href='/ai-cover-letter/'
                    >
                      AI Cover Letter
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/job-matches/'
                    >
                      Job Matches
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/custom-emails/'
                    >
                      Custom Emails
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='https://earnbetter.com/app/job/browse/'
                    >
                      Browse Jobs
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-medium uppercase tracking-wider text-white'>
                  Company
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/about-us/'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/resources/'
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/careers/'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/contact/'
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/press/'
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-medium uppercase tracking-wider text-white'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/privacy/'
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-base text-white opacity-75 hover:text-opacity-60'
                      href='/tos/'
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-white pt-8 opacity-20' />
        <div className='opacity-75'>
          <p className='text-sm text-white'>© 2024 EarnBetter Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
