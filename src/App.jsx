import './App.css'
import Header from './components/header';
import Card from './components/Card';
import Section from './components/Section';
import Footer from './components/Footer';
import img1 from './assets/img1.avif';
import img2 from './assets/img2.avif';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.avif';
import img5 from './assets/img5.avif';
import img12 from './assets/img12.avif';
import img13 from './assets/img13.avif';
import img14 from './assets/img14.avif';
import img15 from './assets/img15.webp';

function App() {

  return (
    <>
      <Header />
      <section className="laptop relative">
        <Section />
      </section>

      <section className="products my-20 lg:my-24 lg:mx-12 xl:my-24 xl:mx-12 md:my-24 grid place-items-center xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
        <Card imageurl={img1} heading={"Maximise the everyday with Microsoft 365"} info={'Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.'} btntext={'For One Person'} />
        <Card imageurl={img2} heading={'Xbox Game Pass Ultimate'} info={'Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.'} btntext={'Join Now'} />
        <Card imageurl={img3} heading={'Xbox Series X'} link={'The fastest most powerful Xbox ever.'} btntext={'Shop X Box X Series'} />
        <Card imageurl={img4} heading={'Get creative with Microsoft Designer'} info={' Create images with words, craft next-level designs and edit photos in seconds with the power of AI.'} btntext={'Try Designer For Free'} />
      </section>

      <section className="games relative my-4">
        <div className="right">
          <img src={img5} alt="copilotpc" className='w-[90vw] lg:h-[90vh] xl:h-[55vh] md:h-[50vh] mx-auto' />
        </div>
        <div className="left lg:text-white xl:text-white md:text-black lg:absolute xl:absolute left-16 top-16 md:static xl:w-[34vw] lg:w-[35vw] md:w-auto lg:mx-14 xl:mx-14 md:mx-0 px-8 py-8">
          <h1 className='heading my-4 text-3xl font-semibold'>Upto 60% off digital games</h1>
          <p className='about my-4'>The wait is over – score incredible deals on select Xbox and PC titles. Sale ends 31 July.</p>
          <button className='my-4 md:bg-black md:text-white lg:text-black lg:bg-white xl:text-black xl:bg-white  font-semibold py-2 px-3'>Shop x box games</button>
        </div >
      </section>

      <section className="cards my-20">
        <h2 className='text-2xl text-black font-semibold mb-[16px] lg:ml-14 xl:ml-14 md:ml-5 ml-5'>For Business</h2>
        <div className="lg:my-5 lg:mx-12 xl:my-5 xl:mx-12 md:my-5 grid place-items-center xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
          <Card imageurl={img12} heading={'Surface for Business '} info={' No matter what you do, there’s a Surface to help you do it.'} btntext={'shop now'} />
          <Card imageurl={img13} heading={' Copilot for Microsoft 365'} info={' Save time and focus on the things that matter most with AI in Microsoft 365 for business. '} btntext={'learn more'} />
          <Card imageurl={img14} heading={'Join the era of AI'} info={' Create, communicate, and code with the latest Microsoft AI solutions. '} btntext={'explore ai solutions'} />
          <Card imageurl={img15} heading={'Visual Studio 2022'} info={'Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.'} btntext={'Download Visual Studio'} />
        </div>
      </section>

      <footer className='bg-slate-200 py-4'>
        <div className='grid lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 xl:gap-0 lg:gap-0 place-items-center py-1 mx-3'>
          <Footer title={`what's New`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
          <Footer title={`Microsoft Store`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
          <Footer title={`Education`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
          <Footer title={`Business`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
          <Footer title={`Developer & IT`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
          <Footer title={`Company`} content={'Surface Laptop'} content1={'Surface Pro'} content2={'Microsoft Copilot'} content3={'Microsoft 365'} content4={'Windows 11 Apps'} />
        </div>
      </footer>
    </>
  )
}

export default App;
