import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Kuoron toiminta */}
          <div>
            <h3 className="text-red-500 font-bold mb-4">Kuoron toiminta</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/esiintymiset" className="hover:text-gray-300">
                  Esiintymiset
                </Link>
              </li>
              <li>
                <Link href="/liity-mukaan" className="hover:text-gray-300">
                  Liity mukaan – tietoa uusille laulajille!
                </Link>
              </li>
              <li>
                <Link href="/toimikunta" className="hover:text-gray-300">
                  Kuoron toimikunta
                </Link>
              </li>
              <li>
                <Link href="/laulajilla" className="hover:text-gray-300">
                  Laulajilla
                </Link>
              </li>
              <li>
                <Link
                  href="/menneet-tapahtumat"
                  className="hover:text-gray-300"
                >
                  Menneet tapahtumat
                </Link>
              </li>
            </ul>
          </div>

          {/* Seuraavat esiintymiset */}
          <div>
            <h3 className="text-red-500 font-bold mb-4">Seuraavat esiintymiset</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/esiintymiset/lapsuuden-joulu"
                  className="hover:text-gray-300"
                >
                  Lapsuuden Joulu – Joulukonsertti la 21.12.2024 klo 17.00
                  Varissuon kirkossa
                </Link>
              </li>
              <li>
                <Link
                  href="/esiintymiset/elaman-nalka"
                  className="hover:text-gray-300"
                >
                  Elämän Nälkä – Konsertti su 27.10.2024 klo 16.00 Martinsalissa
                </Link>
              </li>
              <li>
                <Link
                  href="/esiintymiset/yhteiskonsertti"
                  className="hover:text-gray-300"
                >
                  Yhteiskonsertti – Turun Karjalakuoro ja Mynämäen Mieslaulajat
                  su 14.4.2024
                </Link>
              </li>
            </ul>
          </div>

          {/* TKK muualla verkossa */}
          <div>
            <h3 className="text-red-500 font-bold mb-4">
              TKK muualla verkossa
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.facebook.com/groups/123579054360322/"
                  className="hover:text-gray-300"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCZ_QpM8dDwx88PmP3PPooZQ"
                  className="hover:text-gray-300"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Yhteistyökumppanit */}
          <div>
            <h3 className="text-red-500 font-bold mb-4">Yhteistyökumppanit</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="http://www.aurorakoren.fi/"
                  className="hover:text-gray-300"
                >
                  Aurorakören
                </Link>
              </li>
              <li>
                <Link
                  href="http://www.melos.fi/"
                  className="hover:text-gray-300"
                >
                  Kamarikuoro Melos
                </Link>
              </li>
              <li>
                <Link
                  href="http://www.kulkuset.net/"
                  className="hover:text-gray-300"
                >
                  Sekakuoro Kulkuset
                </Link>
              </li>
              <li>
                <Link
                  href="http://www.karjalanliitto.fi/turunkarjalaseura"
                  className="hover:text-gray-300"
                >
                  Turun Karjala-Seura ry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
