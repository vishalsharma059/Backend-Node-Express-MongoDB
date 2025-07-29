class User {
  constructor(userId, name) {
    this.userId = userId;
    this.name = name;
    this.communities = new Set();
  }

  joinCommunity(community) {
    this.communities.add(community);
  }

  leaveCommunity(community) {
    this.communities.delete(community);
  }

  getCommunities() {
    return Array.from(this.communities);
  }

  toString() {
    return `User(${this.userId}, ${this.name})`;
  }
}

class Community {
  constructor(communityId, name) {
    this.communityId = communityId;
    this.name = name;
    this.members = new Set();
  }

  addUser(user) {
    this.members.add(user);
    user.joinCommunity(this);
  }

  removeUser(user) {
    this.members.delete(user);
    user.leaveCommunity(this);
  }

  getUsers() {
    return Array.from(this.members);
  }

  toString() {
    return `Community(${this.communityId}, ${this.name})`;
  }
}

const user1 = new User(1, "Vishal");
const user2 = new User(2, "Kunal");

const comm1 = new Community(101, "Node.js Developer");
const comm2 = new Community(101, "React.js Developer");

comm1.addUser(user1);
comm1.addUser(user2);
comm2.addUser(user1);

console.log(`Users in ${comm1.name}:`, comm1.getUsers().map(u => u.name));
console.log(`Communities for ${user1.name}:`, user1.getCommunities().map(c => c.name));