import { IoIosArrowBack } from 'react-icons/io';
import Ellipse from '../../assets/Ellipse.png';
import G1 from '../../assets/Group1.png';
import G2 from '../../assets/Group2.png';
import G3 from '../../assets/Group3.png';
import app from '../../assets/app.png';
import rate from '../../assets/rate.png';
import Pattern from '../../assets/Pattern.png';
import demo from '../../assets/demo.gif';
import './Homepage.scss';
import '../../App.css';
import NavBar from '../navbar/Nav-Bar';

const Homepage = () => {
    return (
        <>
            <NavBar className="mainNavbar"></NavBar>
            <section className="explore-apps mt-5">
                <div className='container'>
                    <h2 className='mb-5'>طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زد</h2>
                    <p className='my-3'>طور تجارتك من خلال تطبيقات و حلول سوق تطبيقات زد التى تساعدك فى نمو ارباحك عبر اداره عمليات متجرك بشكل فعلا و احترافى</p>
                    <button className='btn explore-apps-btn my-4'>
                        <IoIosArrowBack className='ArrowIcon mb-1'></IoIosArrowBack> تصفح التطبيقات
                    </button>
                </div>
            </section>
            <section className="app-growth mt-5">
                <div className='row d-flex me-5'>
                    <div className="app-growth-demo">
                        <div className="app-growth-pattern">
                            <img src={Pattern} alt="pattern"></img>
                        </div>
                        <div className="app-growth-ellipse">
                            <img src={Ellipse} alt="ellipse"></img>
                        </div>
                        <div className="app-growth-demo-content">
                            <img className="demo" src={demo} alt="explore website"></img>
                        </div>
                    </div>

                    <div className="app-growth-content">
                        <h4 className='fw-bold'>كل ما تحتاجه لنمو متجرك فى مكان واحد</h4>
                        <p className='app-growthData'>مميزات سوق تطبيقات زد تساعدك فى سهوله و سرعه الاستفاده من خدمات و حلول سوق التطبيقات لنمو متجرك و مضاعفه ارباحك</p>
                        <div className="app-growth-content-wrapper">
                            <div className="d-flex">
                                <div className='app-growth-img'><img src={G1} alt=""></img></div>
                                <p className='me-4 fw-bold'>سهوله اداره و تفعيل تطبيقات من نفس لوحه تحكم متجرك</p>
                            </div>
                            <div className='d-flex'>
                                <div className='app-growth-img'><img src={G2} alt=""></img></div>
                                <p className='me-4 fw-bold'>دعم فنى و تقنى متكامل متوفر على مدار الساعه</p>
                            </div>
                            <div className='d-flex'>
                                <div className='app-growth-img'><img src={G3} alt=""></img></div>
                                <p className='me-4 fw-bold'>اسعار تنافسيه مع تجريه مجانيه و باقات اشتراك متنوعه</p>
                            </div>
                        </div>
                        <button className='btn explore-apps-btn my-5'>
                            تصفح التطبيقات
                            <IoIosArrowBack className='ArrowIcon mb-1'></IoIosArrowBack>
                        </button>
                    </div>
                </div>
            </section>
            <section className="feedback ">
                <div className='feedback-title'>
                    <h3 className='fw-bold fs-3'>التطبيقات المميزه</h3>
                    <p className='fw-bold'>تطبيقات تقدم حلول و خدمات مميزه نوصي بتجربتها</p>
                </div>
                <div className='feedback-items'>
                    <div className='feedback-items-wrapper d-flex'>
                        <div className="feedback-items-img">
                            <img src={app} alt=""></img>
                        </div>
                        <div className="feedback-items-data d-flex">
                            <div className='d-flex'>
                                <h5 >قمره</h5>
                                <div className='rate me-4'>
                                    <img src={rate} alt=""></img>
                                </div>
                            </div>
                            <p>تطوير: <span className='text-muted'>عمر برهام</span></p>
                            <div className='feedback-items-content'>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                            </div>
                        </div>
                    </div>
                    <div className='feedback-items-wrapper d-flex'>
                        <div className="feedback-items-img">
                            <img src={app} alt=""></img>
                        </div>
                        <div className="feedback-items-data d-flex">
                            <div className='d-flex'>
                                <h5 >قمره</h5>
                                <div className='rate me-4 '>
                                    <img src={rate} alt=""></img>
                                </div>
                            </div>
                            <p>تطوير: <span className='text-muted'>عمر برهام</span></p>
                            <div>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                            </div>
                        </div>
                    </div>
                    <div className='feedback-items-wrapper d-flex'>
                        <div className="feedback-items-img">
                            <img src={app} alt=""></img>
                        </div>
                        <div className="feedback-items-data d-flex">
                            <div className='d-flex'>
                                <h5>قمره</h5>
                                <div className='rate me-4'>
                                    <img src={rate} alt=""></img>
                                </div>
                            </div>
                            <p>تطوير: <span className='text-muted'>عمر برهام</span></p>
                            <div>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                            </div>
                        </div>
                    </div>
                    <div className='feedback-items-wrapper d-flex'>
                        <div className="feedback-items-img">
                            <img src={app} alt=""></img>
                        </div>
                        <div className="feedback-items-data d-flex">
                            <div className='d-flex'>
                                <h5>قمره</h5>
                                <div className='rate me-4'>
                                    <img src={rate} alt=""></img>
                                </div>
                            </div>
                            <p>تطوير: <span className='text-muted'>عمر برهام</span></p>
                            <div className='feedback-items-data-wrapper'>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                                <p>نظام الولاء الأمثل الذى يمكنك من رفع مبيعاتك</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;
