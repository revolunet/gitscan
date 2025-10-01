# Deployement repo for the MPAL project

### First Setup
Our virtual machines are provided by [MyEolas](https://www.eolas.fr/).

All the infrastructure and interraction with _Eolas_ is accessible through a web ui : https://my.eolas.fr.

In the event of brand new - meticulously
carved - machines, you have to run the playbook named `first_setup.yml`. It's pretty straitforward, but here's a quick recap of what it does :
   - `apt-get -y upragde`
   - install sudo
   - create a group and user named _ansible_
   - distributes the public key of _ansible_ user

Once this playbook has been run on a machine, you can use ansible the way you're used to.
**Careful though : be sure you use the propper private key when issuing commands.**

Here's an example of the command used to run the first setup on `nddv-anah-demat-back1` :

```ansible-playbook -u root -k -i inventories/demo.ini -e "host=nddv-anah-demat-back1" first_setup.yml```

_(Yes, you have to run this command on each brand new machine, because they all have a different password)_
