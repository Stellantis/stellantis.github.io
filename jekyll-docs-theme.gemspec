# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "PSA-Doc"
  spec.version       = "0.1.1"
  spec.authors       = ["PSA"]
  spec.email         = ["email@psa.com"]

  spec.summary       = "The documentation website for PSA"
  spec.homepage      = ""
  spec.license       = ""

  spec.metadata["plugin_type"] = "theme"

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
