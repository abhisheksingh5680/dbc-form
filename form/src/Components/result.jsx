import React, { useState } from "react";
import './result.css'

// import Swal from "sweetalert2";

const Result = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inputs ", inputs);

    }
    const photoUpload = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file) {
            reader.onloadend = () => {
                // setFile(file);
                // setImagePreview(reader.result);
                setInputs(values => ({ ...values, [event.target.name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="main">
            <form onSubmit={handleSubmit} >
                < div className="App">

                    <div className="form_logo">
                        <img src="/Images/dbc logo.png" alt="" className="logo" />
                    </div>

                    <div className="div-firstform">
                        <div className="nfc">
                            <h1>NFC card Design Requirement</h1>
                        </div>
                        <div className="purpo">

                            <p> The purpose of this form is to capture
                                specific details and preferences regarding the desired design
                                elements for the Sailax NFC card.
                                This ensures that the final product delivered accurately
                                reflects the individual's or organization's branding,
                                messaging, and aesthetic preferences, facilitating
                                effective networking and representation.</p>
                        </div>
                        <div className="line"></div>

                        <div class="new">
                            {/* <span><b>abhishek.22scse2030022@galgotiasuniversity.edu.in</b></span>
                            <br></br> */}
                            <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&pli=1" className="link1">Switch account</a>


                        </div>


                        <div className="detail">
                            <p>The name, email, and photo associated with your Google account will be recorded when you upload files and submit this form
                                Any files that are uploaded will be shared outside of the organization they belong to.
                            </p>
                        </div>
                        <div className="line1"></div>
                        <div class="indicator">* Indicates required question</div>

                    </div>
                    <div className="div-secondform">

                        <div className="mail">
                            <h2>E-mail</h2>

                            <div className="email">
                                <input type="email" name="email" placeholder="Enter your Email" value={inputs.email || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className=" div-photos">
                        <div className="sail">
                            <h2>select Sailax NFC Card </h2>
                        </div>
                        <div className="div-potrait">
                            <div className="img1">
                                <img src="/Images/image_a.png" name="gold" accept=".jpef, .png, .jpg" alt="" />

                                <div className="rad1">
                                    <input type="radio" id="f1" className="f1" name="img" value="gold"
                                        onChange={handleChange} />
                                    Gold Metallic
                                </div>
                            </div>
                            <div className="img2">
                                <img src="/Images/image_b.png" name="silver" accept=".jpef, .png, .jpg" alt="" />

                                <div className="rad2" >
                                    <input type="radio" id="f2" className="f2" name="img" value="silver"
                                        onChange={handleChange} />
                                    Silver Metallic</div>
                            </div>

                            <div className="img3">
                                <img src="/Images/image_c.png" name="black" accept=".jpef, .png, .jpg" alt="" />
                                <div className="rad3">
                                    <input type="radio" id="f3" className="f3" name="img" value="black"
                                        onChange={handleChange} />
                                    Black Metallic
                                </div>
                            </div>
                            <div className="img4">
                                <img src="/Images/image_d.png" name="bamboo" accept=".jpef, .png, .jpg" alt="" />
                                <div className="rad4">
                                    <input type="radio" id="f4" className="f4" name="img" value="bamboo"
                                        onChange={handleChange} />
                                    Bamboo
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="div-fourthform">
                        <div className="div-design">
                            <div className="img11">
                                <img src="/Images/image_ab.png" name="one" accept=".jpef, .png, .jpg" alt="" />

                                <div className="rad11">
                                    <input type="radio" id="f1" className="f1" name="img" value="one"
                                        onChange={handleChange} />
                                    Design1
                                </div>
                            </div>
                            <div className="img22">
                                <img src="/Images/image_bc.png" name="two" accept=".jpef, .png, .jpg" alt="" />

                                <div className="rad22" >
                                    <input type="radio" id="f2" className="f2" name="img" value="two"
                                        onChange={handleChange} />
                                    Design2</div>
                            </div>
                            <div className="img33">
                                <img src="/Images/image_cd.png" name="three" accept=".jpef, .png, .jpg" alt="" />
                                <div className="rad33">
                                    <input type="radio" id="f3" className="f3" name="img" value="three"
                                        onChange={handleChange} />
                                    Design3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-fifthform">
                        <div className="brand">
                            <b>Upload Brand Logo</b>
                            <br></br>

                            <span> <b>(high resolution,transparent)</b></span>
                            <br></br>
                            <br></br>

                            <div className="logo">
                                <input type="file" placeholder='Add file' name="brand" value={inputs.brand || ""}
                                    onChange={handleChange} required />
                            </div>x
                        </div>
                    </div>
                    <div className="div-sixthform">
                        <div className="name">
                            <h3>Name</h3>

                            <div className="ans">
                                <input type="text" placeholder='Your answer' name="customer" value={inputs.customer || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className='div-seventhform'>
                        <div className="comp">
                            <h3>Company Name</h3>

                            <div className="any">
                                <input type="text" placeholder='Your answer' name="company" value={inputs.company || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className='div-eightform'>
                        <div className="comp">
                            <h3>Designation/Profile</h3>

                            <div className="profile">
                                <input type="text" placeholder='Your answer' name="profile" value={inputs.profile || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className='div-ninthform'>
                        <div className="cont">
                            <h3>Contact Details</h3>
                            <b>(optional)(if any)(email address/contact number/region/office address)</b>
                            <br />

                            <div className="deta">
                                <input type="text" placeholder="Your answer" name="details" value={inputs.details || ""}
                                    onChange={handleChange} required />
                            </div></div>
                    </div>
                    <div className="div-tenthform">
                        <div className="code">
                            <b>Upload QR Code of the digital bussiness card</b>
                            <br></br>

                            <span> <b>(high resolution,transparent,PNG format)</b></span>
                            <br></br>
                            <br></br>

                            <div className="qr">
                                <input type="file" placeholder='Add file' name="code" value={inputs.code || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="comp">
                            <h3>Digital Bussiness URL</h3>

                            <div className="profile">
                                <input type="text" placeholder='Your answer' name="url" value={inputs.url || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>
                    <div className='div-eleventhform'>
                        <div className="comp">
                            <h3>Please add any additional requirements</h3>

                            <div className="addi" >
                                <input type='text' placeholder='Your answer' name="require" value={inputs.require || ""}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="div-last">

                        <div className="next">
                            <input type="submit" class="next" value="Submit" />
                        </div>
                        <div className="clear">
                            <input type="reset" class="clear" value="Clear Form" />
                        </div>
                    </div>

                    <div class="div-indim">
                        Never submit passwords through Google Forms.
                    </div>

                </div>

            </form >
        </div >

    );
}
export default Result;
