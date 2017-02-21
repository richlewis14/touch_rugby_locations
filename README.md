#Touch Rugby Locations


##Requirements
  - Node Version 4.3.2
  - git clone
  - `npm install`
  - `node server.js`
  - Mongo running in background

##Setup admin
  - Ensure jake is installed globally `npm install jake -g`

  - To create the admin user run `jake test:createAdminUser`
  - To delete the admin user run `jake test:deleteAdminUser`

##Seed Rugby CLub Data
- `npm install -g node-mongo-seeds`
- run `seed`
- Every time you run $ seed it will blow away all the data in your collections and re-populate them with whatever is in your /seeds directory.

##Testing
  - `npm test`
  - `npm run lint`

##Deployment

Using Ansible: `pip install ansible` or `brew install ansible`

###Vagrant deployment

  - `vagrant up`
  - `cd deployment/`
  - `ansible-playbook site.yml -u vagrant --limit development_touch_rugby_app`
