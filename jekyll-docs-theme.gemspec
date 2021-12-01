# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "StellantisForDevelopers"
  spec.version       = "0.2.0"
  spec.authors       = ["Stellantis"]
  spec.email         = ["email@stellantis.com"]

  spec.summary       = "The documentation website for Stellantis API"
  spec.homepage      = ""
  spec.license       = ""

  spec.metadata["plugin_type"] = "theme"

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
