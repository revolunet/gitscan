# iban_tools

iban_tools is a Ruby library for manipulating and validating IBAN account numbers. You can [read more about IBAN](http://en.wikipedia.org/wiki/International_Bank_Account_Number) on Wikipedia

## Credit

[Iulianu](http://github.com/iulianu) wrote [iban_tools](http://github.com/iulianu/iban_tools). We just removed use of `String#ord` for compatibility with Ruby 1.8 and 1.9 and of course pushed the built gem to gemcutter.

This is the beta.gouv.fr fork, which we plan to refresh and maintain.

## INSTALLATION

```sh
gem install iban_tools
```

or put it in your Gemfile

```ruby
gem 'iban_tools'
```

## USAGE

    require 'rubygems'
    require 'iban_tools'

    IBANTools::IBAN.valid?("GB82 WEST 1234 5698 7654 32")
    => true

Advanced usage, gives more detailed error messages

    IBANTools::IBAN.new("XQ75 BADCODE 666").validation_errors
    => [:unknown_country_code, :bad_check_digits]

Pretty print, canonicalize, and extract fields from an IBAN code

    iban = IBANTools::IBAN.new(" ro49  aaaa 1B31007593840000")

    iban.code
    => "RO49AAAA1B31007593840000"

    iban.country_code
    => "RO"

    iban.prettify
    => "RO49 AAAA 1B31 0075 9384 0000"
