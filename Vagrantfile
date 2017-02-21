# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.define :touch_rugby do |app_config| 
    app_config.vm.box = "bento/ubuntu-16.04"
    app_config.vm.host_name = "touchrugby"
    app_config.vm.network "private_network", ip: "33.32.1.2"
    app_config.ssh.insert_key = true
  end
end

