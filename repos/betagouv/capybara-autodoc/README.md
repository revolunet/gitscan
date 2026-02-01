# capybara-autodoc

## Turn your integration specs into always up-to-date documentation for your team

Autodoc plugs into the Capybara specs of your Rails application, and allows you to create documentation featuring screenshots of your application.
Each time your tests run, Autodoc generates a static site showing the various scenarios defined by your tests.
You can then configure your CI build to upload the latest version of this site wherever you like, for example on Github pages.

As an example, the Autodoc for RDV Service Public, the French team developing the gem can be found [here](https://betagouv.github.io/rdv-service-public/index.html).

### Getting started

Add this to your Gemfile :
```
gem 'capybara-autodoc'
```

And then run
```
$ bundle install
$ bundle exec capybara-autodoc init
```

Let's assume you have a spec in `spec/features/homepage_spec.rb` with the following content:

```
describe "Homepage", :js do
  it "works" do
    visit "/"
    expect(page).to have_content "Hello world!"
  end
end
```

You can turn it into an Autodoc like this :

```
describe "Homepage", :js do
  it "works" do
    scenario = Capybara::Autodoc.start_scenario("Homepage", self)
    scenario.start_section("Home page")

    visit "/"

    scenario.add_screenshot(page, text: "The home page looks like this", wait_for: "Hello world!")
  end
end
```

You can then run your spec, and a static website will be generated automatically! You can then upload it wherever you like (for instance on Github pages).

Do this each time your Continuous Integration build runs, and you've got up-to-date living documentation! 🎉
