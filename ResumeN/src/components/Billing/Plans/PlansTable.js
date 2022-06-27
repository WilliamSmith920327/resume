import React, { Component } from 'react'
import Checkimage from '../../../assets/check.png';
class PlansTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="custom-page__Plans-heading">
                    <h1>Simple,Transparent pricing</h1>
                    <p>To download your resume simply sign up for your Premium Membership. Pick the plan that is the best for you.</p>
                </div>
                <div className="custom-page__Plans-body">
                    {/* Card */}
                    <div className="custom-page__Plans-card">
                        <div className="custom-page__Plans-cardHead">
                            {/* Card Head */}
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="custom-page__Plans-price">{
                                    this.props.monthly !== null && this.props.monthly.toLocaleString('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                    /<span className="monthLabel">Month</span></span>
                            </div>
                            {/* Name */}
                            <div className="planName">
                                <span>Premium Monthly</span>
                                <span>Pay  ${this.props.monthly} for 1 month</span>
                            </div>
                        </div>
                        {/* Card Body  */}
                        <div className="planCard__body">
                            <ul>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited PDF Download  </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited Resumes </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Non-recurring payment. </div>
                                    </div>
                                </li>
                            </ul>
                            <div onClick={() => this.props.nextStep("monthly")} className="planCard-paymentBtnBasic">
                                Upgrade & Download
                            </div>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="custom-page__Plans-card custom-page__Plans-card-active  ">
                        <div className="custom-page__Plans-cardHead">
                            {/* Card Head */}
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="custom-page__Plans-price">{(
                                    this.props.quartarly / 6).toLocaleString('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })
                                }/<span className="monthLabel">Month</span></span>
                            </div>
                            {/* Name */}
                            <div className="planName">
                                <span>Premium 6 Months</span>
                                <span>Pay ${this.props.quartarly} for 6 months</span>
                            </div>
                        </div>
                        {/* Card Body  */}
                        <div className="planCard__body">
                            <ul>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited PDF Download  </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited Resumes </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Non-recurring payment. </div>
                                    </div>
                                </li>
                            </ul>
                            <div onClick={() => this.props.nextStep("halfYear")} className="planCard-paymentBtnBasic planCard-paymentBtnBasic-active">
                                Upgrade & Download
                            </div>
                        </div>
                    </div>
                    {/* Card */}
                    <div className="custom-page__Plans-card">
                        <div className="custom-page__Plans-cardHead">
                            {/* Card Head */}
                            <div className="price">
                                <span className="currency">$</span>
                                <span className="custom-page__Plans-price">{(this.props.yearly / 12).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}/<span className="monthLabel">Month</span></span>
                            </div>
                            {/* Name */}
                            <div className="planName">
                                <span>Premium Yearly</span>
                                <span> ${this.props.yearly} for 1 Year</span>
                            </div>
                        </div>
                        {/* Card Body  */}
                        <div className="planCard__body">
                            <ul>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited PDF Download  </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Unlimited Resumes </div>
                                    </div>
                                </li>
                                {/* feature item */}
                                <li className="planCard__featureItem">
                                    <div className="leftside">
                                        <img src={Checkimage} alt="check" />
                                    </div>
                                    <div className="rightside">
                                        <div>Non-recurring payment. </div>
                                    </div>
                                </li>
                            </ul>
                            <div onClick={() => this.props.nextStep("yearly")} className="planCard-paymentBtnBasic">
                                Upgrade & Download
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
}
export default PlansTable