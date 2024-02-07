import { FootersLinksData } from '../../Data/Data'
import './Footer.css'
export default function Footer(){
    return(
        <footer>
            <div className='container footer-container'>
                <div>
                    <h4>
                        About Us
                    </h4>
                    <ul className='about-params param-links'>
                        {
                            FootersLinksData.Aboutus.map(({link,linkname},index)=>{
                                return(
                                    <li key={index}>{linkname}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4>
                        Discover Us
                    </h4>
                    <ul className='discover-params param-links'>
                        {
                            FootersLinksData.Discover.map(({link,linkname},index)=>{
                                return(
                                    <li key={index}>{linkname}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4>
                        Help Us
                    </h4>
                    <ul className='help-params param-links'>
                        {
                            FootersLinksData.Help.map(({link,linkname},index)=>{
                                return(
                                    <li key={index}>{linkname}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                </div>
        </footer>
    )
}