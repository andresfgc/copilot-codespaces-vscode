function skillsMember()
{
    var member = document.getElementById('member').value;
    var member = member.trim();
    var member = member.toLowerCase();
    var member = member.replace(/\s+/g, '-');
    var member = member.replace(/[^a-zA-Z0-9-]/g, '');
    var member = member.replace(/--+/g, '-');
    var member = member.replace(/-$/g, '');
    var member = member.replace(/^-/g, '');
    document.getElementById('member').value = member;
}
