const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {                                               
        type: String,
        required: true
    },
    collegeId: {
        type: String,
        required: true,
        unique: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
        default: ''
    },
    profileImage: {
        type: String,
        default: ''
    },
    interests: [{
        type: String
    }],
    major: {
        type: String,
        default: ''
    },
    mentorship: {
        mentor: {
            type: Boolean,
            default: false
        },
        mentee: {
            type: Boolean,
            default: false
        }
    },
    matching: {
        preferredMajor: [{
            type: String
        }],
        preferredInterests: [{
            type: String
        }],
        matchedUsers: [{
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            matchScore: {
                type: Number,
                default: 0
            }
        }]
    },
    communities: [{
        communityId: {
            type: Schema.Types.ObjectId,
            ref: 'Community'
        },
        name: {
            type: String
        },
        description: {
            type: String
        }
    }],
    events: [{
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        startTime: {
            type: Date
        },
        endTime: {
            type: Date
        },
        location: {
            type: String
        },
        isVirtual: {
            type: Boolean,
            default: false
        },
        videoCallUrl: {
            type: String,
            default: ''
        },
        media: [{
            type: {
                type: String
            },
            url: {
                type: String
            }
        }]
    }],
    whiteboard: {
        url: {
            type: String,
            default: ''
        },
        startTime: {
            type: Date
        },
        endTime: {
            type: Date
        }
    },
    feedback: {
        stars: [{
            type: Number
        }],
        paragraph: {
            type: String,
            default: ''
        }
    },
    reported: {
        type: Boolean,
        default: false
    },
    reportedBy: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        reason: {
            type: String
        }
    }],
    unmatchedUsers: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }]
});

module.exports = mongoose.model('user', UserSchema);