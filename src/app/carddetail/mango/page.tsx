
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return(
        <>
        <main className="green-page-container">
            <section className="green-page-section">
                <Image
                            src="/images/image403.jpg"
                            alt="Blue Raspberry"
                            fill
                            priority
                            className="background-image"
                          />
            </section>
        </main>
        </>
    )
}