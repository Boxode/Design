import styles from './HomeD.module.css'

export default function Home() {
  return (
    <section className={styles.stars} id='home'>
      <div className='pt-24 pb-8 overflow-hidden z-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:flex lg:justify-center lg:items-center lg:flex-col mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:flex col-span-6'>
              <div className='lg:py-32 lg:px-36 select-none'>
                <p className='mt-4 mb-4 text-2xl lg:text-6xl h-full font-[PoppinsBold] animate-fade-up animate-ease-out animate-duration-1500 animate-delay-500 flex items-center justify-center text-white tracking-tight font-extrabold primary-title sm:mt-5 text-center'>
                  Learn more about our designers and how Boxode Design works.
                </p>
                <p className='mt-3 font-[Questrial] text-center text-base sm:text-2xl animate-fade-up animate-ease-out animate-duration-1500 animate-delay-700 text-neutral-200/50 sm:mt-5'>
                  At Boxode we have brought together great web design talents to
                  create world-class sites.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wave} />
      </div>
    </section>
  )
}
