import React from "react";
import Insidious from "./Insidious";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";
import TwitterTweetEmbed from "./TwitterTweetEbed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      marginTop: 20,
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    this.header = React.createRef();
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    clearTimeout(this.check);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/polio") {
          window.scroll(0, this.polio.current.offsetTop);
        } else if (this.props.pathname === "/claims") {
          this.setState(
            {
              insurance: true
            },
            () => window.scroll(0, this.claims.current.offsetTop)
          );
        } else if (this.props.pathname === "/walter") {
          window.scroll(0, this.walter.current.offsetTop);
        } else if (this.props.pathname === "/testing") {
          window.scroll(0, this.pcr.current.offsetTop);
        } else if (this.props.pathname === "/jury") {
          this.setState(
            {
              juryPermitting: true
            },
            () => window.scroll(0, this.jury.current.offsetTop)
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    const buttonStyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    const { marginTop } = this.state;
    return (
      <div
        style={{
          fontFamily: "'Shizuru', cursive",
          wordBreak: "break-word",
          width: "100%",
          maxWidth: "600px"
        }}
      >
        <div
          ref={this.header}
          style={{
            textAlign: "right",
            width: "100%",
            top: "0px",
            position: "fixed",
            right: "0px",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          anti-
          <a
            href="https://residualsplit.us"
            style={{ color: "white", textDecoration: "none" }}
          >
            residualsplit
          </a>
        </div>
        <div
          style={{
            transition: ".3s ease-in",
            margin: "10px",
            marginTop: marginTop,
            width: "calc(100% - 20px)",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          Keep nationalists out of socialist policy (
          <a href="https://bankingisnot.biz">corporate profit flaccid loss</a>)
          <h2>
            no-quo constitutes a non-taxable gift, AFTER cash:debt*income thru
            history; truncated production tax
          </h2>
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px" }}
            key="1416803308824633347"
            tweetId="1416803308824633347"
          />
          LightTech alternative to debt-jailor government victimization, rent
          seeking and gentrification for useless price inelasticity of
          bid-to-ask and laborless-demand work deficit, unreigned scientific
          power beyond arresting officer evidence or no jail for bail
          <br />
          <a href="https://foiegras.life">
            <Cable
              style={{ width: "60px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/o1sfjemvvrltphz/6520305.png?dl=0"
              }
              float="right"
              title="saverparty.xyz squirrel/chipmunk"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 3]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          targeting gdp or hours worked instead of
          inverse-home-prices/hours-worked is a method of retardation
          <br />
          <br />
          you can only take necessary action to protect an institution that is
          not certifying without proof, of which signature and no
          unexpected-excess death is not; as well as 4400% assets on the line
          and survey bias of calling at 61% without even shuffling total
          population for extrapolation none-the-less @AP @google and days prior
          @northjersy dismayed potentially 2.4m nj registered-voters for Jo
          Jorgensen or a Nick Carducci write in unsolicited
          <Cable
            style={{ height: "340px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/10qfhlzvNSDXMkdEdMOISaLum0ur1dd44/preview"
            }
            float="right"
            title="Tory (GBNews) - Patrick O'Flynn business over labor shill"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 2]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            free rider mutable state laundering profits of labor to small,
            existing business. GIVE UPSTARTS A CHANCE $12k/year/p debt,
            $3k/year/p bonds, $64/year/p checking
          </h2>
          “Keeping businesses afloat,” the only thing kept afloat is
          collateralized debt serviced and uncollateralized bailed out, at cost
          of work deficit unappreciated out park durables the most operation
          non-costable and maintainless no rent-seeking. Existing business trust
          building for landlord lender insurer deficit, instead of capping rent
          at 5 units or 30 days, not price, to worse the sale, and no script
          barrier to drug entry nor immigration nor union
          <br />
          <br />
          <a href="https://NickCarducci2022.com">#SalesTaxOnly</a>
          &nbsp;#InvoicesAreTheft #ReverseM2Inflation #CashDebtGainLoss
          #ImplausibleLandlordUse #SewagePolice NickCarducci2022.com Independent
          candidate for 2022 US Senate for NJ. consumer protection x equity
          protection (
          <a href="https://johnshopkins.academia.edu/NickCarducci">
            anti-credit, anti-rentier, Saver, bottom-right
          </a>
          ). UBI is not only laundering a century of m2 inflation (exponential,
          compound-interest, 7.5%) over checking (7.5%), but war-mongering
          (Booker, Menendez, Neodem, top-left)
          <br />
          <br />
          Add this to your corporate website if you:
          <br />
          1) are an&nbsp;<b>ngo</b>,&nbsp;<b>non-profit</b>, that pays&nbsp;
          <b>under-$200k-wages</b>&nbsp;(non-margin), and
          <br />
          2) do not take credit or permit merchants that do
          <br />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "56px"
              //position: "relative"
            }}
          >
            <a href="https://lightte.ch">
              <Cable
                style={{ width: "60px" }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.dl.dropboxusercontent.com/s/aj6j953nt8dy7ez/LightTech%20Certified%20%281%29.png?dl=0"
                }
                float="right"
                title="light-tech-certified"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + 1]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
            LightTe.ch Certified
          </div>
          Testimonies from our other lightte.ch members: ["I'm kind of like the
          anti-Dan Price!"]
          <br />
          National Equity is a&nbsp;
          <a href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy">
            waste
          </a>
          <br />
          Government: free-rider-immutable (assets, otherwise&nbsp;
          <a href="https://3under2.us">3under2.us</a>&nbsp;service)
          <br />
          assets towards non-descript-copyright-marketplace and to lessen
          3under2.us service burden
          <h1>
            Lightte.ch:&nbsp;
            <span style={{ fontSize: "13px" }}>
              Not-for-profit or salary above $200k* of ngo-ownership
            </span>
          </h1>
          * estimated per current prices, to moderate with&nbsp;
          <a href="https://">late-deflation</a>
          <br />
          Definitions:
          <br />
          <br />
          501(c)3 apolitical (intent of&nbsp;
          <a href="https://saverparty.xyz">civil-rights</a>&nbsp;prosecution or
          &nbsp;<a href="https://thumbprint.us">education</a>)
          <br />
          501(c)4 political (campaign for office or non-civil-right issue&nbsp;
          <a href="https://3under2.us">tax-receipt disbursements</a>
          &nbsp;and&nbsp;
          <a href="https://vaults.biz">fines</a>)
          <br />
          <br />
          <a href="https://vianickcarducci.medium.com/optimal-security-for-webapps-dd2a65c2418c">
            Optimal Security for WebApps
          </a>
          <br />
          <br />
          9 years of work to buy a median house and nothing else in a perfectly
          efficient economy it would cost how much it takes to build (now about
          2.9 years due to counterfeit-wagering)
          <br />
          <br />
          <a href="https://30under5.us">30under5.us</a>
          <br />
          <br />
          vaults.biz (vau.money)
          <br />
          <br />
          scopes.cc
          <br />
          <br />
          wavv.art/united_states_of_america
          <br />
          <br />
          froth.app
          <br />
          <br />
          2052.live
          [squatcommune.com,billbiden.org,moldmask.co,humanharvest.info]
          <br />
          <br />
          gay straight short tall{/*cuck joint slut */}
          <br />
          <br />
          <div style={{ backgroundColor: "rgb(150,200,255)" }}>
            Defunding retirements accounts is less inflation of intermediate
            goods you dunce @larry_kudlow @77WABCradio @BetzArthur @LafferCenter
            <br />
            <br />
            Debt is only price/utility. Do you not believe price-elasticity,
            @scottahodge @TaxFoundation ? Not even for toll-booths is debt not a
            waste in negotiation http://3under2.us https://micro-theory.com
            <br />
            <br />
            Less taxes is good because marginal propensity to consume produces
            more comparatively-advantages trades found
            <br />
            <br />
            Do stocks benefit if they improve by beta? @larry_kudlow
            <br />
            <br />
            “Taxes[, m2 and credit] is inflation” - Kudlow!
            <br />
            <br />
            The unemployment rate is printed. Think like a CEO
            <br />
            <br />
            Savers (labor-equity) are victims, SaverParty.xyz, Vaults.biz,
            Thumbprint.us, Scopes.cc is salvation
            <br />
            <br />
            Not witchcraft or nonconsensual idol, voodoo, totem
            <br />
            <a href="https://2052.live">marx is not communist</a>
            <div style={{ backgroundColor: "rgb(90,150,130)" }}>
              I’ve made the statistical law that populations need to be shuffled
              for significance to be true
            </div>
            <br />
            pro-growth is not private-sector unless you are talking about
            reproduction @larry_kudlow @fcc @77WABCradio https://30under5.us
            <br />
            <br />
            School is one of the schemes to keep youth from earning wealth while
            they learn.
            <br />
            <br />
            Scholastic public administration? @Cornell If most are fat,&nbsp;
            <a href="https://www.cidrap.umn.edu/news-perspective/2020/12/data-reveal-deadliness-covid-19-even-young-adults">
              old
            </a>
            , afro or Hispanic &&nbsp;
            <a href="https://ourworldindata.org/age-structure">
              80% effectiveness
            </a>
            &nbsp;to boot. I can withhold people based on that correlation and
            not on subjective minimal viable product
            <br />
            <br />
            50% worsened lymphoma obviously. J&J not ad as being cultured w stem
            cells
            <br />
            <br />
            If rates rise, they do not. The most in your face fraud there is
            #cfius
            <br />
            <br />
            The right is not from Civil Rights it is free-rider-excluder
            enslaving those denied not based on mvp, of as evidenced as a
            cease-and-desist defamation order would require.
            <br />
            <br />
            Here, you must prove condensation does not happen @uscourts
            @neiltyson
            <br />
            <br />
            Imminent-danger-lethal, qualified-immunity-only-for-a-bad-shot not a
            car-face #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            You want to detain people without a crime? While you allow serflords
            and banksquatting? @BrooklynDA
            <br />
            <br />
            Bail strike you let people out @JCats2013 has been saying and now he
            has you on @FCC
            <br />
            <br />
            @aclu #cfius your inability to do math is not my mental illness, no
            humoral mind is ill by definition @JudiciaryDems @SenJudiciaryGOP
            <br />
            <br />
            If you can become mentally-ill from how you are raised, or
            emotional-trauma, you aren't ill @MerriamWebster
            <br />
            <br />
            The market is not when human labor is capital @MexOnu . The market
            makes things fair unless it is counterfeit in promise instead of
            profit-share/equity
          </div>
          <br />
          Threat is legal, plan of attack is not, castle doctrine over
          rent-seeking-colonialism & counterfeit-in-contract credit and
          collusion of @uscourts to not reimburse borrowers' customers money
          upon reposession, and not be malfeasant in following the doctrine of
          impossibility and castle doctrine, colluding with other governments
          under the false advertisement of no easier option
          <br />
          <br />9 years to build a house / 4 months with 7 people
          <Insidious />
          Armed robbery, if never pulled trigger you shouldn't assume danger;
          address then just call the accountants @IRS
          <br />
          <br />
          Bail, disability, counterfeit, serfdom-with-intent-to-harm, judge
          cannot judge that which takes from their income
          <br />
          <br />
          Libertarians think the market can weed out prisoners' dilemma &
          fractional-reserves @NYCLibertarians @SaverParty
          <br />
          <br />
        </div>
      </div>
    );
  }
}
