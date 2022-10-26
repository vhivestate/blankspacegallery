import React from 'react'
import { Instagram } from 'react-feather';
// import { Mail } from 'react-feather';

function Footer() {
  return (
    <footer className="footer p-10 bg-[#171d22] text-whitet">
        <div>

        <>
  {/* Begin Mailchimp Signup Form */}
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
    rel="stylesheet"
    type="text/css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:300px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
    }}
  />
  <div id="mc_embed_signup">
    <form
      action="https://gmail.us18.list-manage.com/subscribe/post?u=114b62ab30a84f1c13c2544b3&id=9a1b2d52dd&f_id=009f19e7f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate text-black"
      target="_blank"
      noValidate=""
    >
      <div className="" id="mc_embed_signup_scroll">
        <h2 className="text-black">Subscribe to our newsletter</h2>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">
            Email Address <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required=""
          />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
        </div>
        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>{" "}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_114b62ab30a84f1c13c2544b3_9a1b2d52dd"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="optionalParent">
          <div className="clear foot">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />

          </div>
        </div>
      </div>
    </form>
  </div>
  {/*End mc_embed_signup—>
   */}
</>


          
        </div>
        {/* <div className="form-control w-80">
            <span className="footer-title">Newsletter</span> 
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label> 
        <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-active btn-ghost absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div> */}

        <div>
          <span className="footer-title">LOCATION</span> 
          <a href='https://www.google.com/maps/place/298+24th+St,+Ogden,+UT+84401/@41.2231142,-111.9759563,17z/data=!3m1!4b1!4m5!3m4!1s0x87530eddcff562c5:0x9db09706d47bc5a6!8m2!3d41.2231142!4d-111.9737676'>298 24th Street, Ogden, UT, 84401 </a>
        </div>

        <div>
          <span className="footer-title">CONTACT</span> 
          <a href="mailto:blankspacegalleryllc@gmail.com"> blankspacegalleryllc@gmail.com </a>
            <a href='https://www.instagram.com/blankspacegallery/'><Instagram></Instagram></a>
        </div>

    </footer>
    
  )
}

export default Footer