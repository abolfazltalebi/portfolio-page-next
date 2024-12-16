import card1 from '/public/image/icon/Card-1.svg';
import card2 from '/public/image/icon/Card-2.svg';
import card3 from '/public/image/icon/Card-3.svg';
import card4 from '/public/image/icon/Card-4.svg';
import card5 from '/public/image/icon/Card-5.svg';
import card6 from '/public/image/icon/Card.svg';

export default function Trustedsection() {
    return (
        <section className="flex flex-col items-center justify-center mb-7">
            <div className="inline-block bg-Grey-10 border border-neutral-800 rounded-full px-4 py-3 relative -top-6">
                <p className="text-white font-medium text-sm">Trusted By 250+ Companies</p>
            </div>
            <div className="flex items-center justify-between">
                <div><img src={card1} alt="" /></div>
                <div><img src={card2} alt="" /></div>
                <div><img src={card3} alt="" /></div>
                <div><img src={card4} alt="" /></div>
                <div><img src={card5} alt="" /></div>
                <div><img src={card6} alt="" /></div>
            </div>
        </section>
    )
}
