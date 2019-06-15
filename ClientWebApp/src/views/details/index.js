import React from 'react';

export default class Details extends React.Component {

    constructor(props) {
        // fetch("http://czlowiekdlazwierzat.azurewebsites.net/server/api/auction/2")
        //     .then(resp => {
        //         console.log(resp);
        //     })
        super(props);
        this.state = { Error: true }
    }


    render() {

        if (this.state.error) {
            return <div>Niestety nie udało się wyświetlić strony. Spróbuj ponownie później.</div>
        }

        return (
            <article className="article-details">
                <section className="tile-details">
                    <div className="wrap-tile">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/OdXSnjVCuzM/maxresdefault.jpg" alt="zdj pieska" />
                        </div>
                        <div className="description">
                            Lorem ipsum Maecenas tristique nisl at rhoncus commodo. Sed ac ligula ante. Cras a tristique metus. Suspendisse egestas sit amet mi quis pellentesque. Mauris commodo erat quis lectus placerat tristique. Etiam ornare ac elit id fermentum. Donec lacinia eros odio, nec lacinia lorem egestas vitae. Quisque viverra laoreet orci, in ultricies orci tempus eu. Pellentesque mollis lectus in vulputate tincidunt. Praesent non finibus metus. Curabitur elit nisi, sollicitudin sit amet libero et, maximus malesuada velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent efficitur justo scelerisque, eleifend nunc sed, porttitor odio. Morbi aliquet a ante at aliquam. Curabitur imperdiet, lectus id scelerisque varius, nibh justo iaculis felis, id mollis lacus ipsum vitae nunc. Nunc tempus nibh at eros venenatis ullamcorper. In bibendum nulla vel arcu faucibus placerat. Maecenas tincidunt est purus. Nam nec mattis sem. In hac habitasse platea dictumst. Fusce accumsan dui maximus, luctus odio sed, vehicula mi. Vivamus vel neque purus. Nullam sodales nulla vitae augue luctus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent diam est, elementum a maximus a, porttitor in felis. Vivamus ut odio tristique, euismod enim bibendum, tincidunt libero. Nulla facilisi. Aenean vehicula nibh ac felis efficitur, in iaculis magna sollicitudin. Praesent ac libero interdum, efficitur elit ac, blandit lectus. Nulla facilisi. Pellentesque lobortis hendrerit dolor vel molestie. Mauris eu felis id ipsum elementum sagittis. Suspendisse tempus dapibus turpis id dictum. Quisque vehicula, quam sit amet euismod tristique, felis lorem gravida purus, quis sollicitudin justo magna at ipsum.
                        </div>
                    </div>
                    <div className="buttons-tile">
                        <div className="button-tile-item">
                            <img src="/assets/leczenie.svg" alt="leczenie"/>
                            <p className="txt"><div>Środki</div> na leczenie</p>
                        </div>
                        <div className="button-tile-item">
                            <img src="/assets/naprawy.svg" alt="naprawy"/>
                            <p className="txt"><div>Środki</div> na naprawy </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="donate-title">
                        <h1>POMÓŻ</h1>
                    </div>
                    <div className="donate">
                        <div className="donate-buttons">
                            <a className="btn btn-rounded siepomaga" href="/"></a>
                            <a className="btn btn-rounded dotpay" href="/"></a>
                            <a className="btn btn-rounded paypal" href="/"></a>
                        </div>
                        <div className="donate-info">
                            <p>
                                Fundacja Człowiek dla Zwierząt Bank Spółdzielczy w Słomnikach <div>78 86140001 0010 0147 5971 0001</div> 
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}