enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReversed = Membership[2]

console.log(membership)
console.log(membershipReversed)

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)