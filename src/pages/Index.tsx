import { Coffee, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function CoffeeLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1495474472645-4d71bcdd2085?w=1920&h=1080&fit=crop)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6 flex justify-center">
            <Coffee className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Brew Haven</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Artisan Coffee & Cozy Vibes
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition">
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hot Drinks */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                ☕ Hot Drinks
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Espresso', price: '$3.50' },
                  { name: 'Americano', price: '$4.00' },
                  { name: 'Cappuccino', price: '$5.00' },
                  { name: 'Latte', price: '$5.00' },
                  { name: 'Mocha', price: '$5.50' },
                  { name: 'Macchiato', price: '$4.50' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center pb-2 border-b border-border"
                  >
                    <span className="text-lg">{item.name}</span>
                    <span className="text-primary font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cold Drinks */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                🧊 Cold Drinks
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Iced Coffee', price: '$4.50' },
                  { name: 'Iced Latte', price: '$5.50' },
                  { name: 'Cold Brew', price: '$4.50' },
                  { name: 'Iced Cappuccino', price: '$5.50' },
                  { name: 'Affogato', price: '$6.00' },
                  { name: 'Iced Mocha', price: '$6.00' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center pb-2 border-b border-border"
                  >
                    <span className="text-lg">{item.name}</span>
                    <span className="text-primary font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pastries */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-8">
              🥐 Pastries & Snacks
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Croissant', price: '$4.00' },
                { name: 'Blueberry Muffin', price: '$4.50' },
                { name: 'Chocolate Chip Cookie', price: '$3.50' },
                { name: 'Bagel with Cream Cheese', price: '$5.00' },
                { name: 'Banana Bread', price: '$4.00' },
                { name: 'Almond Biscotti', price: '$3.50' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center pb-2 border-b border-border"
                >
                  <span>{item.name}</span>
                  <span className="text-primary font-semibold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-4">Weekdays</h3>
                  <p className="text-foreground/80">Monday - Friday</p>
                  <p className="text-xl font-semibold text-primary">
                    6:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-4">Weekends</h3>
                  <p className="text-foreground/80">Saturday - Sunday</p>
                  <p className="text-xl font-semibold text-primary">
                    7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-foreground/80">
                123 Coffee Street
                <br />
                Brew City, BC 12345
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-foreground/80">(555) 123-4567</p>
              <p className="text-sm text-foreground/60 mt-1">
                Call us anytime
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-foreground/80">hello@brewhaven.com</p>
              <p className="text-sm text-foreground/60 mt-1">
                We reply within 24h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 bg-secondary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">© 2024 Brew Haven. All rights reserved.</p>
          <p className="text-gray-300">
            ☕ Made with love and the finest coffee beans
          </p>
        </div>
      </footer>
    </div>
  );
}
